import { pxToRem } from '../../lib'

export default {
  root: ({ props, variables }) => ({
    height: pxToRem(20),
    margin: `${pxToRem(4)} 0 0 ${pxToRem(4)}`,
    padding: variables.padding,
    display: 'inline-block',
    fontSize: pxToRem(14),
    lineHeight: pxToRem(20),
    verticalAlign: 'middle',
    backgroundColor: 'rgb(232, 232, 232)',
    color: variables.color,
    borderRadius: pxToRem(3),
    ...(props.circular && {
      borderRadius: variables.circularRadius,
    }),
    overflow: 'hidden',
  }),
  icon: ({ props }) => ({
    position: 'relative',
    top: `-${pxToRem(2)}`,
    ...((props.onIconClick ||
      (props.icon && typeof props.icon === 'object' && props.icon.onClick)) && {
      cursor: 'pointer',
    }),
  }),
  image: () => ({
    height: `${pxToRem(20)} !important`,
    width: `${pxToRem(20)} !important`,
    verticalAlign: 'top',
    position: 'relative',
    left: `-${pxToRem(4)}`,
  }),
}
