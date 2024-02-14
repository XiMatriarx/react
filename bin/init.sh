#!/bin/sh

read -p "Project name: " project

if [ -z "$project" ]
then
	echo "Project name is required."
	exit
fi

git clone https://github.com/XiMatriarx/react.git --depth 1 --branch 'v0.0.9'
mv react $project
cd $project
rm -Rf .git
rm -Rf bin
npm install
