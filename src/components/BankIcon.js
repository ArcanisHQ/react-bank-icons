import React from "react";
import { getIconById, getIconByName } from "../util/icon-set";
import FallbackIcon from "./FallbackIcon";
import { defaultProps, propTypes } from "./types/BankIcon.types";

const getIcon = (bankName, bankId) => {
  if (bankName && bankId) {
    return getIconByName(bankName);
  }
  return bankId ? getIconById(bankId) : getIconByName(bankName);
};

const BankIcon = ({
  bankName,
  bankId,
  size,
  viewBox = "0 0 32 32",
  color,
  borderRadius,
  fallbackIcon,
}) => {
  console.log({bankId, bankName});
  const bankIconData = getIcon(bankName, bankId);

  const svgBorderRadius = (size * borderRadius) / 24;

  if (!bankIconData) {
    if (fallbackIcon) {
      return (
        <fallbackIcon size={size} borderRadius={borderRadius} color={color} />
      );
    }
    return (
      <FallbackIcon size={size} borderRadius={borderRadius} color={color} />
    );
  }

  const Svg = bankIconData.svg.original;
  const ariaLabel = `Ícone representando a marca do ${bankIconData.ariaTitle}.`;
  console.log(Svg);
  if (typeof Svg === "function") {
    return (
      <svg
        width={size}
        style={{ borderRadius: svgBorderRadius }}
        className={`rbbi-${bankIconData.bankName}`}
        height={size}
        fill={color}
      >
        <title>{bankIconData.ariaTitle}</title>
        <desc>{ariaLabel}</desc>
        <Svg size={size} svgBorderRadius={svgBorderRadius} />
      </svg>
    );
  }

  return (
    <svg
      width={size}
      style={{ borderRadius: svgBorderRadius }}
      className={`rbbi-${bankIconData.bankName}`}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
    >
      <title>{bankIconData.ariaTitle}</title>
      <desc>{ariaLabel}</desc>
      {Svg}
    </svg>
  );
};

BankIcon.propTypes = propTypes;
BankIcon.defaultProps = defaultProps;

export default BankIcon;
