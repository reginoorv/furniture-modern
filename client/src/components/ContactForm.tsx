import { IMAGES } from "@/assets/images";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { ArrowRight, CheckCircle, Mail, Send, User } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { apiRequest } from "@/lib/queryClient";
import { useEffect, useRef, useState } from "react";

const formSchema = z.object({
  name: z.string().min(2, "Nama harus lebih dari 2 karakter"),
  project: z.string().min(3, "Deskripsi proyek terlalu pendek"),
  email: z.string().email("Masukkan alamat email yang valid")
});

type FormValues = z.infer<typeof formSchema>;

export default function ContactForm() {
  const { toast } = useToast();
  const imageRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("opacity-100");
              entry.target.classList.remove("opacity-0");
              if (entry.target.classList.contains("translate-y-8")) {
                entry.target.classList.remove("translate-y-8");
              }
              if (entry.target.classList.contains("translate-x-8")) {
                entry.target.classList.remove("translate-x-8");
              }
            }, 100);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    if (formRef.current) {
      observer.observe(formRef.current);
    }

    return () => {
      if (imageRef.current) observer.unobserve(imageRef.current);
      if (formRef.current) observer.unobserve(formRef.current);
    };
  }, []);
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      project: "",
      email: ""
    }
  });

  const mutation = useMutation({
    mutationFn: async (data: FormValues) => {
      const response = await apiRequest("POST", "/api/contact", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Permintaan berhasil dikirim!",
        description: "Kami akan menghubungi Anda secepatnya.",
      });
      form.reset();
      setIsSubmitted(true);
      
      // Reset submitted state after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    },
    onError: (error) => {
      toast({
        title: "Terjadi kesalahan!",
        description: error.message || "Gagal mengirim permintaan. Silakan coba lagi.",
        variant: "destructive"
      });
    }
  });

  const onSubmit = (data: FormValues) => {
    mutation.mutate(data);
  };

  return (
    <section id="contact" className="section-spacing section-padding">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 lg:gap-16">
        <div 
          ref={imageRef}
          className="overflow-hidden rounded-lg shadow-xl opacity-0 translate-x-8 transition-all duration-700 ease-out image-scale order-2 md:order-1"
        >
          <img 
            src={IMAGES.contact} 
            alt="Dapur modern dengan aksen kayu" 
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
        
        <div 
          ref={formRef}
          className="opacity-0 translate-y-8 transition-all duration-700 ease-out order-1 md:order-2"
        >
          <h2 className="text-2xl md:text-3xl font-medium mb-8">
            Tinggalkan permintaan untuk diskusi <span className="text-wood-light">gratis</span> tentang proyek Anda
          </h2>
          
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium text-text-dark flex items-center">
                      <User className="w-4 h-4 mr-2 text-wood" />
                      Nama
                    </FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="Masukkan nama" 
                        className="px-4 py-3 bg-neutral-light border border-neutral-darkGray rounded-md focus:outline-none focus:ring-2 focus:ring-wood-light transition-all duration-300"
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="project"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium text-text-dark flex items-center">
                      <CheckCircle className="w-4 h-4 mr-2 text-wood" />
                      Proyek Anda
                    </FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="Deskripsi singkat" 
                        className="px-4 py-3 bg-neutral-light border border-neutral-darkGray rounded-md focus:outline-none focus:ring-2 focus:ring-wood-light transition-all duration-300"
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium text-text-dark flex items-center">
                      <Mail className="w-4 h-4 mr-2 text-wood" />
                      E-Mail
                    </FormLabel>
                    <FormControl>
                      <Input 
                        type="email"
                        placeholder="email@domain.com" 
                        className="px-4 py-3 bg-neutral-light border border-neutral-darkGray rounded-md focus:outline-none focus:ring-2 focus:ring-wood-light transition-all duration-300"
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <Button 
                type="submit" 
                className={`
                  inline-flex items-center text-white px-6 py-3 rounded-full text-sm font-medium
                  transition-all duration-300 h-auto
                  ${isSubmitted 
                    ? 'bg-green-600 hover:bg-green-700' 
                    : 'bg-black hover:bg-wood hover:scale-105'
                  }
                `}
                disabled={mutation.isPending}
              >
                {mutation.isPending ? (
                  <>
                    <span className="animate-pulse">Mengirim...</span>
                    <Send className="ml-2 w-4 h-4 animate-bounce" />
                  </>
                ) : isSubmitted ? (
                  <>
                    <span>Terkirim!</span>
                    <CheckCircle className="ml-2 w-4 h-4" />
                  </>
                ) : (
                  <>
                    <span>Kirim permintaan</span>
                    <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </>
                )}
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
}
