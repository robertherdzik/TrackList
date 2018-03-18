//
//  AppDelegate.swift
//  AppsList
//
//  Created by Robert Herdzik on 02/12/2017.
//  Copyright © 2017 Robert Herdzik. All rights reserved.
//

import UIKit

@UIApplicationMain
class AppDelegate: UIResponder, UIApplicationDelegate {

    var window: UIWindow?


    func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplicationLaunchOptionsKey: Any]?) -> Bool {

//        let globalInput = [1, 8, 9, 9]
//
//        let resut = increment(inputArray: globalInput, indexToIncrement: globalInput.count - 1)

        let globalInput = [1, 8]
        
        return true
    }
    
    func printMe(input: [Int]) {
        
        
    }
    
//    func increment(inputArray input: [Int], indexToIncrement i: Int) -> [Int] {
//        guard i > -1 else { return input }
//
//        let prevIndex = i - 1
//        var newArray = input
//        let valueAtIndex = newArray[i]
//        if valueAtIndex == 9 {
//            newArray[i] = 0
//            newArray = increment(inputArray: newArray,
//                                 indexToIncrement: prevIndex)
//        } else {
//            newArray[i] = valueAtIndex + 1
//        }
//
//        return newArray
//    }
}

