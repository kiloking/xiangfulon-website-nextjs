export default function Head(props) {
  console.log(props)
  return (
    <>
      <title>{props.meta_title.length > 0 ? props.meta_title : "祥富龍實業/祥旭龍實業|建設公司|三蘆在地建商"}</title>
      <meta name="description" content={props.meta_description.length > 0 ? props.meta_description :"祥富龍實業/祥旭龍實業-三重蘆洲專業建商】深耕三重蘆洲地區，以品 質與信譽打造優質住宅。自土木營建基層打底深耕，我們傳承了對建築的愛，代代以 建築專業傳遞美好，不僅接棒對建築的熱忱，更將創造加倍宏遠達觀的未來。"} />
      <meta property="og:title" content={props.meta_title.length > 0 ? props.meta_title : "祥富龍實業/祥旭龍實業|建設公司|三蘆在地建商"} />
      <meta property="og:description" content={props.meta_description.length > 0 ? props.meta_description :"祥富龍實業/祥旭龍實業-三重蘆洲專業建商】深耕三重蘆洲地區，以品 質與信譽打造優質住宅。自土木營建基層打底深耕，我們傳承了對建築的愛，代代以 建築專業傳遞美好，不僅接棒對建築的熱忱，更將創造加倍宏遠達觀的未來。"} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta property="og:image" content="%PUBLIC_URL%/images/logo.png" />
      <link rel="apple-touch-icon" href="%PUBLIC_URL%/images/logo.png" />
      <link rel="icon" href="/favicon.ico" />
      <meta name="google-site-verification" content="mkHHYhOSC79k6df9FUCwetZ1ZH-AYQj3Wts8ccz3YiA" />
    </>
  );
}
