import { formatPrice, slugify, truncate, validateEmail } from "../utils";

describe("Utils", () => {
  describe("formatPrice", () => {
    it("should format price correctly", () => {
      expect(formatPrice(100)).toBe("R$ 100,00");
      expect(formatPrice(1234.56)).toBe("R$ 1.234,56");
    });
  });

  describe("slugify", () => {
    it("should convert text to slug format", () => {
      expect(slugify("Hello World")).toBe("hello-world");
      expect(slugify("Atletica Impostores")).toBe("atletica-impostores");
    });
  });

  describe("truncate", () => {
    it("should truncate text with ellipsis", () => {
      const text = "This is a long text";
      expect(truncate(text, 10)).toBe("This is a ...");
      expect(truncate(text, 100)).toBe(text);
    });
  });

  describe("validateEmail", () => {
    it("should validate email addresses", () => {
      expect(validateEmail("test@example.com")).toBe(true);
      expect(validateEmail("invalid.email")).toBe(false);
    });
  });
});
