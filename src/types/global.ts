declare module 'jenika-ui';

export enum Variant {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  INFO = 'info',
  WARNING = 'warning',
  SUCCESS = 'success',
  DANGER = 'danger',
  DARK = 'dark',
  LIGHT = 'light',
}

export type VariantType = `${Variant}` | undefined;

export type ButtonProps = {
  variant?: VariantType;
  type?: 'button' | 'submit' | 'reset' | undefined;
  disabled?: boolean;
};
