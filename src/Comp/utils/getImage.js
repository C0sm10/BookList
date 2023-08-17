export function getImageUrl(img, size = "800") {
  return (
    "https://img.kitapyurdu.com/v1/getImage/fn:" + img + "/wh:true/wi:" + size
  );
}
