import checkPropTypes from "check-prop-types";

export const checkProps = (component, expectedProps) => checkPropTypes(component.propTypes, expectedProps, 'props', component.name);
export const findTestByAttr = (component, attr) => component.find(`[data-test='${attr}']`);
