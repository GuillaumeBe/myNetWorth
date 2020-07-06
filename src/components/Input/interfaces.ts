export interface Props {
  label: string;
  name: string;
  value: string;
  handleChange: React.FormEventHandler<HTMLInputElement>;
  isAsset?: boolean;
}
