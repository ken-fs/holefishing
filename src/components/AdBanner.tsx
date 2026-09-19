// iframe banner (highrevenueformat). Raw HTML required: invoke.js uses document.currentScript.
interface Props {
  adKey: string;
  width?: number;
  height?: number;
}

export default function AdBanner({ adKey, width = 728, height = 90 }: Props) {
  return (
    <div className="flex justify-center my-8 max-w-full overflow-hidden" style={{ minHeight: height }}>
      <div
        dangerouslySetInnerHTML={{
          __html: `<script>
  atOptions = {
    'key' : '${adKey}',
    'format' : 'iframe',
    'height' : ${height},
    'width' : ${width},
    'params' : {}
  };
</script>
<script src="https://www.highrevenueformat.com/${adKey}/invoke.js"></script>`,
        }}
      />
    </div>
  );
}
