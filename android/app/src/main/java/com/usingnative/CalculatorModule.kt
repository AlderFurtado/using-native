package com.usingnative

import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.facebook.react.module.annotations.ReactModule

@ReactModule(name = CalculatorModule.NAME)
class CalculatorModule(reactContext: ReactApplicationContext): ReactContextBaseJavaModule(reactContext) {
    override fun getName() = NAME

    @ReactMethod fun findPrimeNumbers(limit:Int):String{
        val primesNumber = mutableListOf<Int>()
        for (i in 1..limit){
            var isPrime = true
            for(n in 1..i){
                if(n != 1 && n != i){
                    val result = i % n
                    if(result == 0) isPrime = false
                }
            }
            if(isPrime) primesNumber.add(i)
        }
        return primesNumber.joinToString {
            "$it"
        }
    }

    companion object {
        const val NAME = "CalculatorModule"
    }
}