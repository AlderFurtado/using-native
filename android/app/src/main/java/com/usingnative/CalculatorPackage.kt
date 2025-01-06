package com.usingnative

import android.view.View
import com.facebook.react.ReactPackage
import com.facebook.react.bridge.NativeModule
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.uimanager.ReactShadowNode
import com.facebook.react.uimanager.ViewManager


class CalculatorPackage : ReactPackage {
    //    override fun getModule(p0: String, p1: ReactApplicationContext): NativeModule? {
//        return if (p0 == CalculatorModule.NAME){
//            CalculatorModule(reactContext = p1)
//        }else{
//            null
//        }
//    }
//
//    override fun getReactModuleInfoProvider() = ReactModuleInfoProvider {
//        mapOf(
//            CalculatorModule.NAME to ReactModuleInfo(
//                _name = CalculatorModule.NAME,
//                _className = CalculatorModule.NAME,
//                _canOverrideExistingModule = false,
//                _needsEagerInit = false,
//                isCxxModule = false,
//                isTurboModule = true
//            )
//        )
//    }
    override fun createNativeModules(p0: ReactApplicationContext): MutableList<NativeModule> {
        return listOf(CalculatorModule(p0)).toMutableList()
    }

    override fun createViewManagers(p0: ReactApplicationContext): MutableList<ViewManager<View, ReactShadowNode<*>>> {
        return mutableListOf()
    }
}