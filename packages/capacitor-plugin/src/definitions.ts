export interface CapacitorIntentsPlugin {
  registerBroadcastReceiver(
    options: { filters: string[]; categories?: string[] },
    callback: (data: { [key: string]: any }) => void
  ): Promise<string>;
  
  createBundle(options: { action: string, bundleConfig: { [key: string]: any } }): Promise<void>;

  unregisterBroadcastReceiver(options: { id: string }): Promise<void>;

  sendBroadcastIntent(options: { action: string; extras: { [key: string]: any } }): Promise<void>;
}
