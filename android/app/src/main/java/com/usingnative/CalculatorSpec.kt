package com.usingnative

import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod

abstract class CalculatorSpec (reactContext: ReactApplicationContext)
    : ReactContextBaseJavaModule(reactContext) {
    @ReactMethod
    abstract fun findPrimeNumbers(limit:Int): List<Int>
}