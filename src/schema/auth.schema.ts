import { z } from "zod";

export const emailFormSchema = z.object({
  contact: z
    .string()
    .min(1, "Phone number or email is required")
    .refine(
      (value) => /\S+@\S+\.\S+/.test(value) || /^\d+$/.test(value),
      "Must be a valid email or phone number"
    ),
});

export const profileSetupSchema = z.object({
  fullName: z.string().min(1, "Full name is required"),
  username: z.string().min(3, "Username must be at least 3 characters"),
  phone: z.string().min(1, "Phone number is required"),
  email: z.string().email("Invalid email address"),
});

export const storeFormSchema = z.object({
  storeName: z.string().min(1, "Store name is required"),
  storeTag: z.string().min(1, "Store tag is required"),
  storePhone: z.string().min(1, "Store phone number is required"),
  storeEmail: z.string().email("Invalid email address"),
  category: z.string().min(1, "Category is required"),
  storeImage: z
    .any()
    .refine(
      (file) => file instanceof File && file.size > 0,
      "Store image is required"
    )
    .refine(
      (file) =>
        file instanceof File &&
        ["image/jpeg", "image/png", "image/webp"].includes(file.type),
      "Image must be in JPEG, PNG, or WEBP format"
    )
    .refine(
      (file) => file instanceof File && file.size <= 5 * 1024 * 1024,
      "Image size must be less than 5MB"
    ),
});
