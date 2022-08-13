// import React, { ComponentClass, FunctionComponent } from "react";
// import { Button } from "antd";
// type X = React.ElementType
// type Y = Iterable<any>

// type Z = React.ComponentPropsWithRef<typeof Button>

// ElementType<P>:
// 1. intrinsic element string tag, P may be intrinsic element tag otherwise will omit
// 2. class component
// 3. functional component
//    2,3: P is component props

// type ElementType<P = any> =
//   {
//     [K in keyof JSX.IntrinsicElements]: P extends JSX.IntrinsicElements[K] ? K : never
//   }[keyof JSX.IntrinsicElements] |
//   ComponentType<P>;
// type ComponentType<P = {}> = ComponentClass<P> | FunctionComponent<P>;
