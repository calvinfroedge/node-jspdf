if [ ! -d vendor/jsPDF ]; then
    wget -O jsPDF.zip https://github.com/MrRio/jsPDF/archive/master.zip
    unzip jsPDF.zip
    mkdir vendor
    mv jsPDF-master vendor/jsPDF
    rm jsPDF.zip
fi
