import { IMAGES } from "@/assets/images";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { ArrowRight } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { apiRequest } from "@/lib/queryClient";

const formSchema = z.object({
  name: z.string().min(2, "Nama harus lebih dari 2 karakter"),
  project: z.string().min(3, "Deskripsi proyek terlalu pendek"),
  email: z.string().email("Masukkan alamat email yang valid")
});

type FormValues = z.infer<typeof formSchema>;

export default function ContactForm() {
  const { toast } = useToast();
  
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
    <section id="contact" className="py-16 md:py-20 px-6 md:px-12 lg:px-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="overflow-hidden rounded-lg">
          <img 
            src={IMAGES.contact} 
            alt="Dapur modern dengan aksen kayu" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div>
          <h2 className="text-2xl md:text-3xl font-medium mb-8">
            Tinggalkan permintaan untuk diskusi gratis tentang proyek Anda
          </h2>
          
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium text-text-dark">Nama</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="Masukkan nama" 
                        className="px-4 py-3 bg-neutral-light border border-neutral-darkGray rounded-md focus:outline-none focus:ring-2 focus:ring-wood-light"
                        {...field} 
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="project"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium text-text-dark">Proyek Anda</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="Deskripsi singkat" 
                        className="px-4 py-3 bg-neutral-light border border-neutral-darkGray rounded-md focus:outline-none focus:ring-2 focus:ring-wood-light"
                        {...field} 
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium text-text-dark">E-Mail</FormLabel>
                    <FormControl>
                      <Input 
                        type="email"
                        placeholder="email@domain.com" 
                        className="px-4 py-3 bg-neutral-light border border-neutral-darkGray rounded-md focus:outline-none focus:ring-2 focus:ring-wood-light"
                        {...field} 
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              
              <Button 
                type="submit" 
                className="inline-flex items-center bg-black text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors"
                disabled={mutation.isPending}
              >
                {mutation.isPending ? "Mengirim..." : "Kirim permintaan"}
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
}
