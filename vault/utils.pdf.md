---
id: t22kyc0u219zttxwumy1mz4
title: Pdf
desc: ''
updated: 1678256860813
created: 1678256860813
---


Working from https://superuser.com/a/1217306
Trying to compress a pdf


compresspdf() {
    echo 'Usage: compresspdf [input file] [output file] [screen|ebook|printer|prepress]'
    gs -sDEVICE=pdfwrite -dNOPAUSE -dQUIET -dBATCH -dPDFSETTINGS=/${3:-"screen"} -dCompatibilityLevel=1.4 -sOutputFile="$2" "$1"
}

compresspdf "Massive.pdf" "Small.pdf" ebook