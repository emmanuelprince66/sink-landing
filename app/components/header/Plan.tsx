import React from "react";
import { Card, CardContent, Button } from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

interface PlanProps {
  title: string;
  price: {
    amount: string;
    currency: string;
    period: string;
  };
  features: { name: string; available: boolean; comingSoon?: boolean }[];
  backgroundColor: string;
  buttonText: string;
}

const Plan: React.FC<PlanProps> = ({
  title,
  price,
  features,
  backgroundColor,
  buttonText,
}) => {
  return (
    <Card
      sx={{ backgroundColor }}
      className={`${backgroundColor} rounded-lg shadow-md min-h-[44rem] flex flex-col`}
    >
      <CardContent className="p-6 flex flex-col flex-grow">
        {/* Title & Price */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">{title}</h2>
          <div className="flex items-baseline">
            <span className="text-3xl font-bold">
              {price.currency}
              {price.amount}
            </span>
            <span className="text-gray-600 text-sm">/{price.period}</span>
          </div>
        </div>

        {/* Features List */}
        <div className="space-y-3 mb-6 flex-grow">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center">
              {feature.available && (
                <CheckCircleOutlineIcon
                  className="text-green-600 mr-2"
                  fontSize="small"
                />
              )}
              <span className="text-sm">
                {feature.name}
                {feature.comingSoon && (
                  <span className="ml-2 text-amber-500 text-xs font-medium">
                    Coming soon
                  </span>
                )}
              </span>
            </div>
          ))}
        </div>

        {/* Button Stays at Bottom */}
        <div className="mt-auto">
          <Button
            sx={{
              bgcolor: "white",
              _hover: { bgcolor: "gray" },
              color: "black",
            }}
            variant="contained"
            fullWidth
            className="mb-0 bg-white text-black hover:bg-gray-100 normal-case"
          >
            {buttonText}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default Plan;
