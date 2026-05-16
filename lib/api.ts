import {
  alerts,
  dashboardKpis,
  financeRecords,
  fnbOutlets,
  fnbTrend,
  inventoryItems,
  occupancyTrend,
  operationKpis,
  revenueSegments,
  revenueTrend,
  rooms
} from "@/lib/mock-data";

export async function getDashboardData() {
  return {
    kpis: dashboardKpis,
    operationKpis,
    occupancyTrend,
    revenueTrend,
    revenueSegments,
    alerts: alerts.slice(0, 3),
    rooms: rooms.slice(0, 4)
  };
}

export async function getRoomsData() {
  return {
    kpis: dashboardKpis.slice(0, 3),
    rooms,
    occupancyTrend
  };
}

export async function getRevenueData() {
  return {
    kpis: dashboardKpis.slice(1, 4),
    revenueTrend,
    revenueSegments
  };
}

export async function getFnbData() {
  return {
    outlets: fnbOutlets,
    trend: fnbTrend
  };
}

export async function getInventoryData() {
  return {
    items: inventoryItems
  };
}

export async function getFinanceData() {
  return {
    records: financeRecords,
    revenueTrend
  };
}

export async function getAlertsData() {
  return {
    alerts
  };
}
