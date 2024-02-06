import axios from "axios";
import { config as dotenv } from 'dotenv';

const url = dotenv().parsed.STORE_URL;

const API = axios.create({
    baseURL: `${url}/admin/api/2024-01/`,
    headers: {
        "Content-Type": "application/json",
        "X-Shopify-Access-Token": dotenv().parsed.TOKEN
    }
})

export const shopifyApp = API;
export default shopifyApp;


//---------------------------------------------------
// import '@shopify/shopify-api/adapters/node';
// import { shopifyApi, LATEST_API_VERSION } from '@shopify/shopify-api';
// import { config as dotenv } from 'dotenv';

// const shopifyApp = shopifyApi({
//     apiKey: dotenv().parsed.API_KEY,
//     apiSecretKey: dotenv().parsed.API_SECRET_KEY,
//     scopes: [
//         "write_metaobject_definitions", "read_metaobject_definitions", "write_metaobjects",
//         "read_metaobjects", "read_custom_pixels", "write_online_store_pages", "read_online_store_pages",
//         "write_products", "read_products", "write_script_tags", "read_script_tags", "write_custom_pixels",
//         "write_gates", "read_gates", "write_privacy_settings", "read_privacy_settings", "read_analytics",
//         "read_apps", "write_assigned_fulfillment_orders", "read_assigned_fulfillment_orders",
//         "read_customer_events", "write_customers", "read_customers", "write_discounts", "read_discounts",
//         "write_discovery", "read_discovery", "write_draft_orders", "read_draft_orders", "write_files",
//         "read_files", "write_fulfillments", "read_fulfillments", "write_gift_cards", "read_gift_cards",
//         "write_inventory", "read_inventory", "write_legal_policies", "read_legal_policies",
//         "write_locations", "read_locations", "write_marketing_events", "read_marketing_events",
//         "write_merchant_managed_fulfillment_orders", "read_merchant_managed_fulfillment_orders",
//         "write_online_store_navigation", "read_online_store_navigation", "write_order_edits",
//         "read_order_edits", "write_orders", "read_orders", "write_packing_slip_templates",
//         "read_packing_slip_templates", "write_payment_customizations", "read_payment_customizations",
//         "write_payment_terms", "read_payment_terms", "write_pixels", "read_pixels", "write_price_rules",
//         "read_price_rules", "write_product_feeds", "read_product_feeds", "write_product_listings",
//         "read_product_listings", "write_publications", "read_publications", "write_purchase_options",
//         "read_purchase_options", "write_reports", "read_reports", "write_resource_feedbacks",
//         "read_resource_feedbacks", "write_returns", "read_returns", "write_channels",
//         "read_channels", "write_shipping", "read_shipping", "write_locales", "read_locales",
//         "write_shopify_credit", "read_shopify_credit", "write_markets", "read_markets",
//         "read_shopify_payments_accounts", "read_shopify_payments_bank_accounts",
//         "write_shopify_payments_disputes", "read_shopify_payments_disputes",
//         "read_shopify_payments_payouts", "write_content", "read_content",
//         "write_store_credit_account_transactions", "read_store_credit_account_transactions",
//         "read_store_credit_accounts", "write_themes", "read_themes",
//         "write_third_party_fulfillment_orders", "read_third_party_fulfillment_orders",
//         "write_translations", "read_translations", "read_all_cart_transforms",
//         "write_all_checkout_completion_target_customizations",
//         "read_all_checkout_completion_target_customizations", "write_cart_transforms",
//         "read_cart_transforms", "write_companies", "read_companies",
//         "write_custom_fulfillment_services", "read_custom_fulfillment_services",
//         "write_customer_data_erasure", "read_customer_data_erasure", "write_customer_merge",
//         "read_customer_merge", "write_delivery_customizations", "read_delivery_customizations",
//         "write_discounts_allocator_functions", "read_discounts_allocator_functions",
//         "write_fulfillment_constraint_rules", "read_fulfillment_constraint_rules",
//         "write_order_submission_rules", "read_order_submission_rules",
//         "read_shopify_payments_provider_accounts_sensitive", "write_validations",
//         "read_validations"
//     ],
//     hostName: dotenv().parsed.TUNNEL,
//     apiVersion: LATEST_API_VERSION,
//     adminApiAccessToken: dotenv().parsed.TOKEN,

// });
// export default shopifyApp;