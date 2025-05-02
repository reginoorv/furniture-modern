import express, { type Express } from "express";
import { createServer, type Server } from "http";
import { db } from "@db";
import { contactSubmissionSchema, contactSubmissions } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // API Routes
  const apiRouter = express.Router();

  // Contact form submission
  apiRouter.post("/contact", async (req, res) => {
    try {
      // Validate request data
      const validatedData = contactSubmissionSchema.parse(req.body);
      
      // Insert into database
      const [newSubmission] = await db.insert(contactSubmissions)
        .values(validatedData)
        .returning();
      
      return res.status(201).json({ 
        success: true, 
        message: "Permintaan berhasil dikirim", 
        data: newSubmission 
      });
    } catch (error) {
      console.error("Contact form submission error:", error);
      
      if (error instanceof z.ZodError) {
        return res.status(400).json({ 
          success: false, 
          message: "Data yang dimasukkan tidak valid", 
          errors: error.errors 
        });
      }
      
      return res.status(500).json({ 
        success: false, 
        message: "Terjadi kesalahan pada server" 
      });
    }
  });

  // Use the API router with the /api prefix
  app.use("/api", apiRouter);

  const httpServer = createServer(app);
  return httpServer;
}
