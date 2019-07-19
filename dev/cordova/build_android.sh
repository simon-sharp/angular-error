#!/bin/bash

echo "Building Angular project"
cd ..
cd angular-error
web_prod_folder=$(pwd)
web_prod_folder+="/dist/web-prod"
ng build --prod --base-href="./" --outputPath="dist/web-prod"
echo "Ending building Angular project"


echo "---------------------------------------------------------------------------------";
echo "Preparing Cordova project folder"
cd ../..

if [ ! -d "./operative" ]; then
    mkdir operative
fi
cd operative

if [ ! -d "./angular-error" ]; then
    mkdir angular-error
fi
cd angular-error

if [ ! -d "./android" ]; then
    mkdir android
fi
cd android

android_folder=$(pwd)
android_folder+="/cordova_template"
echo "Android folder:"
echo $android_folder

echo "End preparing Cordova project folder"

echo "---------------------------------------------------------------------------------";
echo "Copy Cordova template"
rm -Rf cordova_template
echo "Current working directory"
pwd
cp -Rf ../../../dev/cordova/template .
mv ./template ./cordova_template
cp -Rf $web_prod_folder/* ./cordova_template/template_src/www
echo "End copy Cordova template"

echo "---------------------------------------------------------------------------------";
echo "Create cordova project"

rm -Rf cordova
mkdir cordova
cd cordova

# Create Cordova
echo cordova create angularError com.angularerror \"angularerror\" --template $android_folder
cordova create angularError com.angularerror "angularerror" --template $android_folder

cd angularError

cordova platform add android

cordova plugin add cordova-plugin-device
cordova plugin add cordova-plugin-inappbrowser
cordova plugin add cordova-plugin-network-information
cordova plugin add cordova-plugin-file
cordova plugin add cordova-plugin-file-transfer
cordova plugin add cordova-plugin-console
cordova plugin add cordova-plugin-file-opener2
