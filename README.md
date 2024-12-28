# Expo Camera Preview Freeze Bug

This repository demonstrates a bug encountered when using the Expo Camera API. The camera preview intermittently freezes, requiring a full application restart to resume functionality.  This issue is non-deterministic and difficult to consistently reproduce.  The provided code examples illustrate the setup where the bug has been observed, along with a potential solution (though not guaranteed to resolve the issue in all cases).  Further investigation is needed to pinpoint the root cause.

## Steps to Reproduce

While we haven't identified a precise set of steps to consistently reproduce the bug, it appears more frequently after extended use of the camera or after switching between front and rear cameras several times.

## Potential Solution

The provided `cameraBugSolution.js` file contains a possible workaround involving a careful management of camera component lifecycle events and the usage of a separate state variable to track if a restart is needed. This is not a definitive fix, and further investigation is needed.