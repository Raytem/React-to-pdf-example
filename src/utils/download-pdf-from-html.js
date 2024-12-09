
// link to documentation: https://www.npmjs.com/package/html2pdf.js#getting-started

export const downloadPdfFromHtml = async ({ fileName, domNode, documentWidth }) => {
    const options = {
        filename: fileName,
        margin: 0.05,
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: {
            scale: 3,
            width: documentWidth,
        },
        jsPDF: {
            unit: "in",
            format: "letter",
            orientation: "portrait",
        },
    };

    let clonedElement = null;
    if (documentWidth !== undefined) {
        clonedElement = domNode.cloneNode(true);
        clonedElement.style.width = `${documentWidth}px`;
    }

    const html2pdf = (await import("html2pdf.js")).default;
    html2pdf().set(options).from(clonedElement ?? domNode).save();
};