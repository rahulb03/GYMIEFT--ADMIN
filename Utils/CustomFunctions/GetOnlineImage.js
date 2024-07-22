const GetOnlineImage = (data, collection_name, type = "original_url") => {
  if (collection_name == "product_images") return data?.filter((elem) => elem.collection_name === collection_name).map((item) => item[type]);
  return data && data?.find((elem) => elem.collection_name === collection_name)?.[type] || "/assets/images/product/product-placeholder.png";
};

export default GetOnlineImage;
