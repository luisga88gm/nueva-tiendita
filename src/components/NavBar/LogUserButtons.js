import { Button } from '@mui/material'
import React from 'react'
import { Link } from "react-router-dom";

const LogUserButtons = () => {
  return (
    <>
    
                  <Link to="/logUser" className="noTextTransform white">
                    <Button
                      className="noTextTransform"
                      sx={{ my: 2, color: "white",bgcolor:"rgb(39, 39, 39)", display: "block" }}
                    >
                      Ingresar
                    </Button>
                  </Link>

                  <Link to="/newUser" className="noTextTransform white">
                    <Button
                      className="noTextTransform"
                      sx={{ my: 2, color: "white",bgcolor:"rgb(39, 39, 39)", display: "block" }}
                    >
                      Crear Cuenta
                    </Button>
                  </Link>
                </>
  )
}

export default LogUserButtons