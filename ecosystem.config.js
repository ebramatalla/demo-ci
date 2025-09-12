// ecosystem.config.js
module.exports = {
  apps: [
    {
      name: 'demo-ci',
      script: './index.js',          // نقطة تشغيل السيرفر
      interpreter: 'node',
      exec_mode: 'fork',             // fork مناسب لويندوز
      instances: 1,                  // غيّرها لـ 'max' مع exec_mode:'cluster' لو عايز تعدد
      autorestart: true,
      max_memory_restart: '300M',
      time: true,                    // يظهر timestamp في لوج PM2
      merge_logs: true,

      // راقب الملفات أثناء التطوير فقط
      watch: false,                  // سيتم تفعيلها تلقائيًا في env_development لو حابب
      // لو فعلتها، تجاهل المجلدات الثقيلة:
      // ignore_watch: ['node_modules', '.git', 'logs', 'tmp'],

      env: {                         // قيم افتراضية مشتركة
        PORT: 3000
      },
      env_development: {
        NODE_ENV: 'development',
        PORT: 3000,
        // لو عايز watch في التطوير:
        // WATCH: '1'
      },
      env_production: {
        NODE_ENV: 'production',
        PORT: 3000
      },

      // إيقاف لطيف وإعادة تشغيل تصاعدية
      kill_timeout: 5000,
      exp_backoff_restart_delay: 200
    }
  ]
};
