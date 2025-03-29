# capacitor-intents-for-android

Simple intent tools for Capacitor on Android platform.

## Install

```bash
npm install capacitor-intents-for-android
npx cap sync
```

## Compatibility

- Capacitor 7.x
- Android Gradle Plugin 8.8.0
- Gradle 8.13
- Supports Android SDK 35

Version 1.5.0 and above supports Capacitor 7. For Capacitor 5, use version 1.4.0.

## Usage

See `example-app` in `packages` folder.

## Simple Example Zebra Device

Register Listener:

```Typescript
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
            intent_output_enabled: "true", //attention for Zebra true and false are string type
            intent_action: "com.your.custom.action",
            intent_delivery: 2,
        },
    },
};

CapacitorIntents.sendBroadcastIntent({
    action: "com.symbol.datawedge.api.ACTION",
    extras: {
        "com.symbol.datawedge.api.SET_CONFIG",
        profileConfig
    }
});

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
