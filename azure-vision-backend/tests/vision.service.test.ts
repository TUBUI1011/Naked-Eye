import { analyzeImageFromBuffer } from "../src/services/vision.service";
import { Buffer } from "buffer";

describe("analyzeImageFromBuffer", () => {
  it("should return recognized text from a valid image buffer", async () => {
    const mockImageBuffer = Buffer.from("mock image data"); // Replace with actual image buffer for real tests
    const expectedText = "Recognized text"; // Replace with expected text based on the mock image

    // Mock the Azure Vision API response
    jest.spyOn(analyzeImageFromBuffer, "analyze").mockResolvedValue({
      read: {
        blocks: [
          {
            lines: [{ text: expectedText }],
          },
        ],
      },
    });

    const result = await analyzeImageFromBuffer(mockImageBuffer);
    expect(result).toBe(expectedText);
  });

  it("should return an empty string if no text is found", async () => {
    const mockImageBuffer = Buffer.from("mock image data"); // Replace with actual image buffer for real tests

    // Mock the Azure Vision API response
    jest.spyOn(analyzeImageFromBuffer, "analyze").mockResolvedValue({
      read: {
        blocks: [],
      },
    });

    const result = await analyzeImageFromBuffer(mockImageBuffer);
    expect(result).toBe("");
  });

  it("should throw an error if the analysis fails", async () => {
    const mockImageBuffer = Buffer.from("mock image data"); // Replace with actual image buffer for real tests

    // Mock the Azure Vision API response to throw an error
    jest.spyOn(analyzeImageFromBuffer, "analyze").mockRejectedValue(new Error("Analysis failed"));

    await expect(analyzeImageFromBuffer(mockImageBuffer)).rejects.toThrow("Failed to analyze image with Azure Vision.");
  });
});