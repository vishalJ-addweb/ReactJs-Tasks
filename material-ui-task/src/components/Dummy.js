{
  {["Pages"].map((text, index) => {
          if (index === 0) {
            return RecursiveDrawerItems(text, index, [
              "Profile",
              "Settings",
              "Pricing",
              "Chat",
              "Blank Page",
            ]);
          } else {
            return RecursiveDrawerItems(text, index);
          }
        })}

        <ListItem button>
          <ListItemIcon>
            <AssignmentOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary="Projects" />
        </ListItem>

        <ListItem button>
          <ListItemIcon>
            <ShoppingCartOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary="Orders" />
        </ListItem>

        {["Invoices"].map((text, index) => {
          if (index === 0) {
            return RecursiveDrawerItems(text, index, ["List", "Detail"]);
          } else {
            return RecursiveDrawerItems(text, index);
          }
        })}

        <ListItem button>
          <ListItemIcon>
            <CheckBoxOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary="Tasks" />
        </ListItem>

        <ListItem button>
          <ListItemIcon>
            <CalendarTodayOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary="Calendar" />
        </ListItem>

        {["Auth"].map((text, index) => {
          if (index === 0) {
            return RecursiveDrawerItems(text, index, [
              "Sign In",
              "Sign Up",
              "Reset Password",
              "404 Page",
              "500 Page",
            ]);
          } else {
            return RecursiveDrawerItems(text, index);
          }
        })} 
}
