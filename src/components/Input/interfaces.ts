export interface IProps {
  label: string;
  name: string;
  value: string;
  onChange: React.FormEventHandler<HTMLInputElement>;
  isAsset?: boolean;
}
