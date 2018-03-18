//
//  ViewController.swift
//  AppsList
//
//  Created by Robert Herdzik on 02/12/2017.
//  Copyright © 2017 Robert Herdzik. All rights reserved.
//

import UIKit
import React

class ViewController: UIViewController {

    override func viewDidAppear(_ animated: Bool) {
        super.viewDidAppear(animated)
        
        presentScore()
    }
    
    override func viewDidLayoutSubviews() {
        super.viewDidLayoutSubviews()
        
//        let myV = UIView()
//        myV.translatesAutoresizingMaskIntoConstraints = false
//        myV.backgroundColor = UIColor.green
//        view.addSubview(myV)
//
//        NSLayoutConstraint.activate([
//            myV.topAnchor.constraint(equalTo: view.safeAreaLayoutGuide.topAnchor),
//            myV.bottomAnchor.constraint(equalTo: view.safeAreaLayoutGuide.bottomAnchor),
////            myV.topAnchor.constraintEqualToSystemSpacingBelow(view.topAnchor, multiplier: 1),
////            myV.bottomAnchor.constraintEqualToSystemSpacingBelow(view.bottomAnchor, multiplier: 1),
//            myV.leadingAnchor.constraint(equalTo: view.safeAreaLayoutGuide.leadingAnchor),
//            myV.trailingAnchor.constraint(equalTo: view.safeAreaLayoutGuide.trailingAnchor)
//            ])
    }
    
    private func presentScore() {
        NSLog("Hello")
        let jsCodeLocation = URL(string: "http://localhost:8081/index.bundle?platform=ios")
        let mockData:NSDictionary = ["urlParam": "metallica"]
        
        let rootView = RCTRootView(
            bundleURL: jsCodeLocation,
            moduleName: "AppsList",
            initialProperties: mockData as [NSObject : AnyObject],
            launchOptions: nil
        )
        let vc = UIViewController()
        vc.view = rootView
        
        
        
        navigationController?.pushViewController(vc, animated: true)
    }
}

