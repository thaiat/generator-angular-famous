set -e

bash which bower || npm install -g bower
bash which gulp || npm install -g gulp
bash which karma || npm install -g karma-cli

bower install

echo "prepublish executed sucessfully"
