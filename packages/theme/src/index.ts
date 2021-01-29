type RoleStates = {
  default: string;
  hover: string;
  active: string;
  disabled: string;
};

export type Theme = {
  colors: {
    primary: RoleStates;
    onPrimary: RoleStates;
    secondary: RoleStates;
    onSecondary: RoleStates;
  };
  borderRadius: {
    default: string;
  };
  density: {
    compact: number;
    comfortable: number;
    default: number;
  };
  spacer: {
    s: string;
    m: string;
    l: string;
  };
};

export const theme: Theme = {
  colors: {
    primary: {
      default: "#222222",
      hover: "#1f1f1f",
      active: "#141414",
      disabled: "#525252",
    },
    onPrimary: {
      default: "#fff",
      hover: "#fff",
      active: "#fff",
      disabled: "#7a7a7a",
    },
    secondary: {
      default: "#61d095",
      hover: "#72D5A0",
      active: "#81D9AA",
      disabled: "#525252",
    },
    onSecondary: {
      default: "#222",
      hover: "#222",
      active: "#222",
      disabled: "#a3a3a3",
    },
  },
  borderRadius: {
    default: "5px",
  },
  density: {
    comfortable: 2,
    compact: 0.5,
    default: 1,
  },
  spacer: {
    s: "10px",
    m: "15px",
    l: "20px",
  },
};
