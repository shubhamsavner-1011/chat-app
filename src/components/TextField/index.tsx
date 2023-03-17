import { Visibility, VisibilityOff } from '@mui/icons-material';
import { IconButton, InputAdornment, TextField } from '@mui/material';
import type { FieldProps } from 'formik';
import type { FC } from 'react';
import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  className?: string;
  handleInputChange?: React.ChangeEventHandler;
  showIcon?: boolean;
  showPassword?: boolean;
  setShowPassword?: React.Dispatch<React.SetStateAction<boolean>>;
  variant?: 'standard' | 'filled' | 'outlined';
  color?: 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning';
  placeholder?: string;
  value?: string;
  error: boolean;
  type: string;
}
export const DynamicTextfield: FC<InputProps & FieldProps> = ({
  type,
  variant,
  showIcon,
  field,
  showPassword,
  setShowPassword,
  error,
  placeholder,
}) => {
  const [isPassword, setIsPassword] = React.useState<boolean>(false);
  const handleClickShowPassword = () => {
    if (setShowPassword) {
      setIsPassword(!isPassword);
      setShowPassword(!showPassword);
    }
  };
  const handleMouseDownPassword = (event: { preventDefault: () => void }) => {
    event.preventDefault();
  };
  return (
    <>
      <TextField
        margin="dense"
        placeholder={placeholder}
        variant={variant}
        error={error}
        fullWidth
        type={isPassword ? 'text' : type}
        sx={{
          '& fieldset': { border: 'none', borderRadius: '50px' },
        }}
        InputProps={{
          style: error
            ? {
                borderRadius: '16px',
                alignItems: 'center',
                border: '2.5px solid rgb(255 131 131)',
                display: 'flex',
                marginTop: '8px',
                position: 'relative',
                height: 50,
              }
            : {
                borderRadius: '16px',
                alignItems: 'center',
                background: '#f7f7f7',
                border: '2.5px solid #e5e5e5',
                display: 'flex',
                marginTop: '8px',
                position: 'relative',
                height: 50,
              },
          endAdornment: showIcon && (
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {showPassword ? (
                  <VisibilityOff sx={{ color: '#1CB0F6' }} />
                ) : (
                  <Visibility sx={{ color: '#1CB0F6' }} />
                )}
              </IconButton>
            </InputAdornment>
          ),
        }}
        {...field}
      />
    </>
  );
};
