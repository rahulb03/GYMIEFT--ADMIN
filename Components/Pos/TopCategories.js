import React from "react";
import Slider from "react-slick";
import { useTranslation } from "next-i18next";
import { Card, CardBody } from "reactstrap";
import CategoryComponent from "./Category";
import { TopCategorySlider } from "./SilderData";

const TopCategories = ({ CategoryData, setGetCategoryId, getCategoryId }) => {
  const { t } = useTranslation("common");
  if (!CategoryData) return null;
  return (
    <Card>
      <CardBody>
        <div className="pos-product-screen">
          <div className="title-header">
            <h5 className="mb-3 fw-bold">{t("TopCategory")}</h5>
          </div>
          <Slider className="slider-7 no-arrow" {...TopCategorySlider(CategoryData)}>
            {CategoryData.map((item) => (
              <CategoryComponent categoryData={item} key={item.id} setGetCategoryId={setGetCategoryId} getCategoryId={getCategoryId} />
            ))}
          </Slider>
        </div>
      </CardBody>
    </Card>
  );
};

export default TopCategories;
