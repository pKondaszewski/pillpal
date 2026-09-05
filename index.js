// Custom entry point.
//
// The background notification task must be defined in module scope of a JS
// module loaded early — otherwise, when Android launches the JS bundle headless
// (app terminated) to handle a "Taken"/"Snooze" action tap, the task is never
// registered and the button does nothing. Importing it here, before the router
// entry, guarantees `TaskManager.defineTask` runs on every JS launch, including
// headless ones. See https://docs.expo.dev/versions/v57.0.0/sdk/notifications/
import './src/notifications/background-task';

import 'expo-router/entry';
