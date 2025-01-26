import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectItem } from "@/components/ui/select";
import { motion } from "framer-motion";

const TelegramMemberSales = () => {
  const [memberType, setMemberType] = useState("real");
  const [quantity, setQuantity] = useState(100);
  const [username, setUsername] = useState("");

  const handleOrder = () => {
    alert(`Order placed: ${quantity} ${memberType} members for @${username}`);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        <Card className="shadow-lg rounded-2xl">
          <CardContent className="p-6">
            <h1 className="text-2xl font-bold text-center mb-4">Buy Telegram Members</h1>

            <div className="mb-4">
              <label className="block mb-2 font-medium">Member Type</label>
              <Select value={memberType} onChange={setMemberType}>
                <SelectItem value="real">Real Members</SelectItem>
                <SelectItem value="fake">Fake Members</SelectItem>
              </Select>
            </div>

            <div className="mb-4">
              <label className="block mb-2 font-medium">Quantity</label>
              <Input
                type="number"
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
                min="50"
                className="w-full"
              />
            </div>

            <div className="mb-4">
              <label className="block mb-2 font-medium">Telegram Username</label>
              <Input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="e.g., username"
                className="w-full"
              />
            </div>

            <Button className="w-full mt-4" onClick={handleOrder}>
              Place Order
            </Button>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default TelegramMemberSales;