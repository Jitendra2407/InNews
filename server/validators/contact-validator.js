const { z } = require("zod");

const contactSchema = z.object({
  username: z
    .string({ required_error: "Name is required" })
    .trim()
    .min(3, { message: "Name must be at least of 3 chars" })
    .max(255, { message: "Name must not be more than 255 characters" }),

  email: z
    .string({ required_error: "Email is required" })
    .trim()
    .email({ message: "invalid email address" })
    .min(3, { message: "Email must be atleast of 3 chars." })
    .max(255, { message: "Email must not be more than 255 characters" }),

  message: z
    .string({ required_error: "Message is required" })
    .trim()
    .min(20, { message: "Message must be atleast of 20 chars" })
    .max(1000, { message: "Message must not be more than 1000 characters" }),
});

module.exports = { contactSchema };