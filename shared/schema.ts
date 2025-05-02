import { pgTable, text, serial, integer, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// Project table
export const projects = pgTable("projects", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  slug: text("slug").notNull().unique(),
  description: text("description"),
  image: text("image").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull()
});

export const projectsInsertSchema = createInsertSchema(projects);
export type ProjectInsert = z.infer<typeof projectsInsertSchema>;
export type Project = typeof projects.$inferSelect;

// Service table
export const services = pgTable("services", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  slug: text("slug").notNull().unique(),
  description: text("description").notNull(),
  image: text("image").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull()
});

export const servicesInsertSchema = createInsertSchema(services);
export type ServiceInsert = z.infer<typeof servicesInsertSchema>;
export type Service = typeof services.$inferSelect;

// Contact submissions
export const contactSubmissions = pgTable("contact_submissions", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  project: text("project").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull()
});

export const contactSubmissionSchema = createInsertSchema(contactSubmissions, {
  name: (schema) => schema.min(2, "Nama harus lebih dari 2 karakter"),
  email: (schema) => schema.email("Masukkan alamat email yang valid"),
  project: (schema) => schema.min(3, "Deskripsi proyek terlalu pendek")
});

export type ContactSubmission = z.infer<typeof contactSubmissionSchema>;
