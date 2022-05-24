import React from "react";
import makeStyles from "@mui/styles/makeStyles";
import { Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useTheme } from "@mui/material/styles";
import Grid from "@mui/material/Grid";

const useStyles = makeStyles((theme) => ({
  sectionContents: {
    backgroundColor: "#fee5d1",
    height: "670px",
    borderRadius: "20px",
    color: "#332549",
    padding: "18px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    width: "60%",
    margin: "auto",
    boxShadow: "rgb(0 0 0 / 5%) 10px 12px 20px 20px",
    "@media (max-width: 1035px)": {
      height: "680px",
      "@media (max-width: 900px)": {
        height: "700px",
        "@media (max-width: 626px)": {
          height: "720px",
          "@media (max-width: 596px)": {
            height: "740px",
            "@media (max-width: 571px)": {
              height: "780px",
              "@media (max-width: 556px)": {
                height: "800px",
                "@media (max-width: 471px)": {
                  height: "780px",
                  "@media (max-width: 463px)": {
                    height: "830px",
                    "@media (max-width: 448px)": {
                      height: "860px",
                      "@media (max-width: 421px)": {
                        height: "880px",
                        "@media (max-width: 403px)": {
                          height: "900px",
                          "@media (max-width: 385px)": {
                            height: "920px",
                            "@media (max-width: 374px)": {
                              height: "960px",
                              "@media (max-width: 371px)": {
                                height: "980px",
                                "@media (max-width: 367px)": {
                                  height: "1030px",
                                  "@media (max-width: 358px)": {
                                    height: "1050px",
                                    "@media (max-width: 335px)": {
                                      height: "1070px",
                                      "@media (max-width: 323px)": {
                                        height: "1090px",
                                      },
                                    },
                                  },
                                },
                              },
                            },
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
  },

  imgContainer: {
    alignItems: "center",
  },
  image: {
    display: "block",
    transition: "0.5s ease",
    backfaceVisibility: "hidden",
    width: "300px",
    borderRadius: "20px",
    height: "200px",
    margin: "auto",
    "@media (max-width: 540px)": {
      width: "250px",
      "@media (max-width: 470px)": {
        width: "200px",
        height: "150px",
        "@media (max-width:360px)": {
          width: "150px",
          height: "100px",
        },
      },
    },
  },
  practise: {
    justifyContent: "center",
    marginTop: "20px",
    display: "flex",
  },
  instructions: {
    alignItems: "center",
    margin: "auto",
  },
  textBox: {
    display: "flex",
    position: "relative",
    flexDirection: "row",
    marginBottom: "10px",
    justifyContent: "center",
  },
  numberBox: {
    height: "37px",
    backgroundColor: "#d68e9c",
    color: "#ffff",
    justifyContent: "center",
    marginRight: "10px",
    padding: "10px",
    flexDirection: "column",
    fontWeight: "bold",
  },
  textBackGround: {
    backgroundColor: "#d68e9c",
    padding: "5px",
    color: "#ffff",
    boxSizing: "border-box",
    width: "400px",
  },
}));

export default function PeeingDog() {
  const classes = useStyles();
  const { t } = useTranslation();
  const theme = useTheme;

  return (
    <div>
      <Grid container direction="row" sx={{ mt: 1 }} justifyContent={"center"}>
        <div className={classes.sectionContents}>
          <Grid item>
            <Typography
              variant="h6"
              sx={{ mb: 2 }}
              style={{ fontWeight: "bold" }}
            >
              {t("BackSection.peeing_dog.title")}
            </Typography>
            <Typography sx={{ mb: 2 }}>
              {t("BackSection.peeing_dog.text")}
            </Typography>
          </Grid>
          <Grid item>
            <div className={classes.imgContainer}>
              <img
                src="/images/peeing_dog.jpeg"
                alt="peeing dog"
                className={classes.image}
              ></img>
            </div>
          </Grid>
          <div className={classes.practise}>
            <Typography sx={{ mb: 2 }} style={{ fontWeight: "bold" }}>
              {t("BackSection.peeing_dog.practise")}
            </Typography>
          </div>
          <Grid item sx={{ mt: 2 }} lg={12} md={12} sm={12} xs={12}>
            <div className={classes.instructions}>
              <div className={classes.textBox}>
                <div className={classes.numberBox}>1.</div>
                <div className={classes.textBackGround}>
                  <Typography textAlign={"left"} sx={{ ml: 2 }}>
                    {t("BackSection.peeing_dog.1")}
                  </Typography>
                </div>
              </div>
              <div className={classes.textBox}>
                <div className={classes.numberBox}>2.</div>
                <div className={classes.textBackGround}>
                  <Typography textAlign={"left"} sx={{ ml: 2 }}>
                    {t("BackSection.peeing_dog.2")}
                  </Typography>
                </div>
              </div>
              <div className={classes.textBox}>
                <div className={classes.numberBox}>3.</div>
                <div className={classes.textBackGround}>
                  <Typography textAlign={"left"} sx={{ ml: 2 }}>
                    {t("BackSection.peeing_dog.3")}
                  </Typography>
                </div>
              </div>
              <div className={classes.textBox}>
                <div className={classes.numberBox}>4.</div>
                <div className={classes.textBackGround}>
                  <Typography textAlign={"left"} sx={{ ml: 2, mt: 1 }}>
                    {t("BackSection.peeing_dog.4")}
                  </Typography>
                </div>
              </div>
            </div>
          </Grid>
        </div>
      </Grid>
    </div>
  );
}
