import * as Yup from "yup";
export const BannerSchema = Yup.object().shape({
  image: Yup.string().required("Required") ,
  package: Yup.string().required("Required") ,
  startDate: Yup.string().required("Required") ,
  endDate: Yup.string().required("Required") ,
});