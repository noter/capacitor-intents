# capacitor-intents-android

Simple intent tools for Capacitor on Android platform.

## Install

```bash
npm i capacitor-intents-android
npx cap sync
```

## Usage

## Simple Example Zebra Device
```Typescript
// Register Listener:
CapacitorIntents.registerBroadcastReceiver({
    filters: ['com.your.custom.action', 'com.symbol.datawedge.api.RESULT_ACTION'],
    categories: ['android.intent.category.DEFAULT']
    },
    // Callback function
    (intent) => {
        console.log('Received Intent: ', intent.extras);
    })

CapacitorIntents.sendBroadcastIntent({ 
    action: 'com.your.custom.action', 
    // You can add as many extra Key : Value Pairs as Needed
    extras: {
        "com.symbol.datawedge.api.SOFT_SCAN_TRIGGER":   "TOGGLE_SCANNING"
        }
    })
    .then(
        (result) => {
            console.log('sendCommand: ', result);
        }
    );

// Profile Creation 
const profileConfig = {
    PROFILE_NAME: "Example Name",
    PROFILE_ENABLED: "true",
    CONFIG_MODE: "UPDATE",
    PLUGIN_CONFIG: {
        PLUGIN_NAME: "INTENT",
        RESET_CONFIG: "true",
        PARAM_LIST: {
            intent_output_enabled: "true",
            intent_action: "com.your.custom.action",
            intent_delivery: "2",
        },
    },
};
CapacitorIntents.createBundle({ action: "com.symbol.datawedge.api.ACTION", extra: "com.symbol.datawedge.api.SET_CONFIG", bundleConfig: profileConfig });

```

## API

<docgen-index>

* [`registerBroadcastReceiver(...)`](#registerbroadcastreceiver)
* [`unregisterBroadcastReceiver(...)`](#unregisterbroadcastreceiver)
* [`sendBroadcastIntent(...)`](#sendbroadcastintent)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### registerBroadcastReceiver(...)

```typescript
registerBroadcastReceiver(options: { filters: string[]; categories?: string[]; }, callback: (data: { [key: string]: any; }) => void) => any
```

| Param          | Type                                                    |
| -------------- | ------------------------------------------------------- |
| **`options`**  | <code>{ filters: {}; categories?: {}; }</code>          |
| **`callback`** | <code>(data: { [key: string]: any; }) =&gt; void</code> |

**Returns:** <code>any</code>

--------------------


### unregisterBroadcastReceiver(...)

```typescript
unregisterBroadcastReceiver(options: { id: string; }) => any
```

| Param         | Type                         |
| ------------- | ---------------------------- |
| **`options`** | <code>{ id: string; }</code> |

**Returns:** <code>any</code>

--------------------


### sendBroadcastIntent(...)

```typescript
sendBroadcastIntent(options: { action: string; extras: { [key: string]: any; }; }) => any
```

| Param         | Type                                                              |
| ------------- | ----------------------------------------------------------------- |
| **`options`** | <code>{ action: string; extras: { [key: string]: any; }; }</code> |

**Returns:** <code>any</code>

--------------------

</docgen-api>
