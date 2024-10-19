const { z } = require("zod");

const noteSchema = z.object({
  title: z
    .string({ required_error: "title is required" })
    .trim()
    .min(3, { message: "title must be at least of 3 chars" })
    .max(100, { message: "title must not be more than 100 characters" }),

  content: z
    .string({ required_error: "content is required" })
    .trim()
    .min(3, { message: "content must be at least of 3 chars" })
    .max(255, { message: "content must not be more than 255 characters" }),
});

module.exports = { noteSchema };