declare module '@gradio/client' {
  export class Client {
    static connect(endpoint: string): Promise<Client>;
    predict(route: string, data: any): Promise<{ data: string[] }>;
  }
}