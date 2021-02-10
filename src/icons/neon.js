import React from "react";

// ícone oficial do Banco Votorantim

const Votorantim = ({ size, viewBox, svgBorderRadius }) => {
  return (
    <svg
      width={size}
      height={size}
      style={{ borderRadius: svgBorderRadius }}
      className={`rbbi-neon`}
      viewBox={viewBox}
      fill="transparent"
    >
      <image
        x="0"
        y="0"
        width={size}
        height={size}
        href="https://www.bancobv.com.br/web/site/resources/img/logo-banco-bv.svg"
      />
    </svg>
  );
};

const Neon = {
  bankName: "votorantim",
  bankId: 655,
  ariaTitle: "Banco Votorantim",
  svg: {
    original: Votorantim,
    mono: Votorantim,
  },
};

export default Neon;
