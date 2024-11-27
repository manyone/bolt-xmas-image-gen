export interface ImageGenerationResponse {
  url: string;
}

export interface ImageGenerationError {
  error: string;
}

export interface GeneratedImage {
  id: string;
  prompt: string;
  url: string;
  timestamp: number;
}

export interface ApiError {
  message: string;
  code?: string;
  status?: number;
}