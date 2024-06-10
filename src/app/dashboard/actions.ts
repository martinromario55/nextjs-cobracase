"use server";
import { db } from "@/db";
import { OrderStatus } from "@prisma/client";

interface OrderStatusProps {
  id: string;
  newStatus: OrderStatus;
}

export const changeOrderStatus = async ({
  id,
  newStatus,
}: OrderStatusProps) => {
  await db.order.update({
    where: { id },
    data: { status: newStatus },
  });
};
