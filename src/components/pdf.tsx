type PDFProps = {
  pdfUrl: string;
};

const PDFCard = ({ pdfUrl }: PDFProps) => {
  return (
    <div className="max-w-5xl mx-auto my-8 aspect-[8.5/11]">
      <object data={pdfUrl} type="application/pdf" className="w-full h-full">
        <p>Your browser does not support PDFs. <a href={pdfUrl}>Download</a> instead.</p>
      </object>
    </div>
  );
};

export default PDFCard;