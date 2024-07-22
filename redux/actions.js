import { changePassword, getProfile, login, logout, updateProfile } from "./auth/authThunks"
import { createIdentity, getIdentity, getSingleIdentity, updateIdentity, deleteIdentity, changeIdentityStatus } from "./identity/identityThunks"
import { createBrand, getBrand, getSingleBrand, updateBrand, deleteBrand, changeBrandStatus, getBrandDropDown } from "./brand/brandThunks"
import { createGstTax, getGstTax, getSingleGstTax, updateGstTax, deleteGstTax, changeGstTaxStatus } from "./gstTax/gstTaxThunks"
import { createSocial, getSocial, getSingleSocial, updateSocial, deleteSocial, changeSocialStatus } from "./social/socialThunks"
import { createGlobal, getGlobal, getSingleGlobal, updateGlobal, deleteGlobal, changeGlobalStatus, getGlobalDropDown } from "./global/globalThunks"
import { createCategory, getCategory, getSingleCategory, updateCategory, deleteCategory, changeCategoryStatus, getCategoryDropDown } from "./category/categoryThunks"
import { createVariant, getVariant, getSingleVariant, updateVariant, deleteVariant, changeVariantStatus, getVariantDropDown } from "./variant/variantThunks"
import { createOrderStatus, getOrderStatus, getSingleOrderStatus, updateOrderStatus, deleteOrderStatus, changeOrderStatusStatus } from "./orderStatus/orderStatusThunks"
import { createCoupon, getCoupon, getSingleCoupon, updateCoupon, deleteCoupon, changeCouponStatus } from "./coupon/couponThunks"
import { createTag, getTag, getSingleTag, updateTag, deleteTag, changeTagStatus } from "./tag/tagThunks"
import { getSiteConfiguration, updateSiteConfiguration } from "./siteConfiguration/siteConfigurationThunks"
import { createProduct, getProduct, getSingleProduct, updateProduct, deleteProduct, changeProductStatus } from "./product/productThunks"
import { getSeller, getSingleSeller, deleteSeller, changeSellerStatus } from "./seller/sellerThunks"
import { getUser, getSingleUser, deleteUser, changeUserStatus } from "./user/userThunks"
import { createVendor, getVendor, getSingleVendor, updateVendor, deleteVendor, changeVendorStatus } from "./vendor/vendorThunks"
import { createJobType, getJobType, getSingleJobType, updateJobType, deleteJobType, changeJobTypeStatus, jobTypeDropDown } from "./jobType/jobTypeThunks"

const actions = {
    // auth section ------------
    login,
    getProfile,
    updateProfile,
    changePassword,
    logout,
    // ------------

    // jobType section ------------
    jobTypeDropDown,
    createJobType,
    getJobType,
    getSingleJobType,
    updateJobType,
    changeJobTypeStatus,
    deleteJobType,
    // ------------

    // identity section ------------
    createIdentity,
    getIdentity,
    getSingleIdentity,
    updateIdentity,
    changeIdentityStatus,
    deleteIdentity,
    // ------------

    // social section ------------
    createSocial,
    getSocial,
    getSingleSocial,
    updateSocial,
    changeSocialStatus,
    deleteSocial,
    // ------------

    // gstTax section ------------
    createGstTax,
    getGstTax,
    getSingleGstTax,
    updateGstTax,
    changeGstTaxStatus,
    deleteGstTax,
    // ------------

    // brand section ------------
    createBrand,
    getBrandDropDown,
    getBrand,
    getSingleBrand,
    updateBrand,
    changeBrandStatus,
    deleteBrand,
    // ------------

    // global section ------------
    getGlobalDropDown,
    createGlobal,
    getGlobal,
    getSingleGlobal,
    updateGlobal,
    changeGlobalStatus,
    deleteGlobal,
    // ------------

    // category section ------------
    getCategoryDropDown,
    createCategory,
    getCategory,
    getSingleCategory,
    updateCategory,
    changeCategoryStatus,
    deleteCategory,
    // ------------

    // variant section ------------
    getVariantDropDown,
    createVariant,
    getVariant,
    getSingleVariant,
    updateVariant,
    changeVariantStatus,
    deleteVariant,
    // ------------

    // orderStatus section ------------
    createOrderStatus,
    getOrderStatus,
    getSingleOrderStatus,
    updateOrderStatus,
    changeOrderStatusStatus,
    deleteOrderStatus,
    // ------------

    // coupon section ------------
    createCoupon,
    getCoupon,
    getSingleCoupon,
    updateCoupon,
    changeCouponStatus,
    deleteCoupon,
    // ------------

    // tag section ------------
    createTag,
    getTag,
    getSingleTag,
    updateTag,
    changeTagStatus,
    deleteTag,
    // ------------

    // tag section ------------
    getSiteConfiguration,
    updateSiteConfiguration,
    // ------------

    // product section ------------
    createProduct,
    getProduct,
    getSingleProduct,
    updateProduct,
    changeProductStatus,
    deleteProduct,
    // ------------

    // seller section ------------
    getSeller,
    getSingleSeller,
    changeSellerStatus,
    deleteSeller,
    // ------------

    // user section ------------
    getUser,
    getSingleUser,
    changeUserStatus,
    deleteUser,
    // ------------

    // vendor section ------------
    createVendor,
    getVendor,
    getSingleVendor,
    updateVendor,
    changeVendorStatus,
    deleteVendor,
    // ------------
}

export default actions